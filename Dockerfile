FROM node:lts-alpine3.12

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL=warn
ENV INSTALL_PATH=/app

# This sets the context of where commands will be ran in and is documented
# on Docker's website extensively.
WORKDIR $INSTALL_PATH

# # Caching deps
COPY ./package.json ./yarn.lock $INSTALL_PATH/
RUN yarn --silent
#
# # Add in the application code from your work station at the current directory
# # over to the working directory.
COPY . $INSTALL_PATH

EXPOSE 3000
