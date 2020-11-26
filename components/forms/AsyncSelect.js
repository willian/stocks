import { Transition } from '@headlessui/react'
import { forwardRef, useRef, useState } from 'react'

import useOuterClick from '../../hooks/useOuterClick'
import { Keys } from '../../utils/keyboard'

import CheckIcon from '../icons/CheckIcon'

import TextField from './TextField'

const options = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 },
  { label: 'Four', value: 4 },
  { label: 'Five', value: 5 },
  { label: 'Six', value: 6 },
  { label: 'Seven', value: 7 },
  { label: 'Eight', value: 8 },
  { label: 'Nine', value: 9 },
  { label: 'Ten', value: 10 },
]

const AsyncSelect = forwardRef(({ className = '', id, name, setValue, defaultValue }, ref) => {
  const [selectedOption, setSelectedOption] = useState(
    options.find((o) => o.value === defaultValue) || {},
  )
  const [inputValue, setInputValue] = useState(selectedOption.label || '')
  const [menuIndex, setMenuIndex] = useState(-1)
  const [open, setOpen] = useState(false)
  const inputRef = useRef()
  const ulRef = useRef()
  const wrapperRef = useOuterClick(() => setOpen(false))

  const isSelected = (option) => option.value === selectedOption.value

  const handleKeyDown = (event) => {
    switch (event.key) {
      case Keys.ArrowDown: {
        event.preventDefault()

        if (!open) {
          setOpen(true)
          break
        }

        let newMenuIndex = menuIndex + 1
        if (newMenuIndex === options.length) newMenuIndex = 0

        const option = options[newMenuIndex]

        ulRef.current.setAttribute('aria-activedescendant', `${id || name}-option-${option.value}`)
        const liOption = ulRef.current.children[newMenuIndex]
        liOption.focus()

        setMenuIndex(newMenuIndex)

        break
      }

      case Keys.ArrowUp: {
        event.preventDefault()

        if (!open) {
          setOpen(true)
          break
        }

        let newMenuIndex = menuIndex - 1
        if (newMenuIndex < 0) newMenuIndex = options.length - 1

        const option = options[newMenuIndex]

        ulRef.current.setAttribute('aria-activedescendant', `${id || name}-option-${option.value}`)
        const liOption = ulRef.current.children[newMenuIndex]
        liOption.focus()

        setMenuIndex(newMenuIndex)

        break
      }

      case Keys.Enter: {
        event.preventDefault()

        const option = options[menuIndex]

        setSelectedOption(option)
        setInputValue(option.label)
        setValue(name, option.value)

        setOpen(false)

        inputRef.current.focus()

        break
      }

      case Keys.Tab: {
        setOpen(false)
        break
      }

      default:
        if (!open) {
          setOpen(true)
          break
        }
        break
    }
  }

  const handleFocus = () => {
    setOpen(true)
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
    setMenuIndex(0)
  }

  const handleClick = (index) => {
    const option = options[index]

    setSelectedOption(option)
    setValue(name, option.value)
    setInputValue(option.label)
    setMenuIndex(index)
    setOpen(false)

    inputRef.current.focus()
  }

  const handleOptionMouseOver = (index) => {
    const option = options[index]
    ulRef.current.setAttribute('aria-activedescendant', `${id || name}-option-${option.value}`)

    setMenuIndex(index)
  }

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <TextField
        aria-expanded="true"
        aria-haspopup="true"
        autoComplete="off"
        className={`async-select ${className}`}
        onChange={handleChange}
        onClick={handleFocus}
        onKeyDown={handleKeyDown}
        placeholder="Type a name or symbol"
        ref={inputRef}
        value={inputValue}
      />

      <input id={id} name={name} ref={ref} type="hidden" defaultValue={selectedOption.value} />

      <Transition
        className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={open}
      >
        <ul
          aria-labelledby="headlessui-listbox-label-1"
          className="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-32 focus:outline-none sm:text-sm sm:leading-5"
          id="headlessui-listbox-options-6"
          ref={ulRef}
          role="listbox"
          tabIndex="0"
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              aria-selected="true"
              id={`${id || name}-option-${option.value}`}
              onClick={() => handleClick(index)}
              onFocus={() => setMenuIndex(index)}
              onKeyDown={handleKeyDown}
              onMouseOver={() => handleOptionMouseOver(index)}
              role="option"
              tabIndex="-1"
              className="focus:outline-none"
            >
              <div
                className={`relative py-2 pl-8 pr-4 cursor-default select-none ${
                  menuIndex === index ? 'text-white bg-purple-600 ' : 'text-gray-900 '
                }`}
              >
                <span
                  className={`block truncate ${
                    isSelected(option) ? 'font-semibold' : 'font-normal'
                  }`}
                >
                  {option.label}
                </span>
                {isSelected(option) && (
                  <span
                    className={`absolute inset-y-0 left-0 flex items-center pl-1.5 ${
                      menuIndex === index ? 'text-white ' : 'text-purple-600 '
                    }`}
                  >
                    <CheckIcon />
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  )
})

AsyncSelect.displayName = 'AsyncSelect'

export default AsyncSelect
