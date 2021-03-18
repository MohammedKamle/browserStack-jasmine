#!/bin/bash

export BUILD="InterviewKickStart -Sample Build"
export BROWSERSTACK_USER="mohammedk1"      # Put Your BrowserStack Username here
export BROWSERSTACK_ACCESSKEY="spBCpUJaVTnvxxssFtEJ" # Put Your BrowserStack Access Key here

setFirefoxCaps() {
  export OS_VERSION="10"
  export BROWSERNAME="Firefox"
  export BROWSER_VERSON="77"
  export OS="Windows"
  export NAME="InterviewKickStart - Firefox Tests -"
JASMINE_CONFIG_PATH=jasmine.json npx jasmine

}

setChromeCaps() {
 export OS_VERSION="10"
 export BROWSERNAME="Chrome"
 export BROWSER_VERSON="88"
 export OS="Windows"
 export NAME="InterviewKickStart - Chrome Tests -"
 JASMINE_CONFIG_PATH=jasmine.json npx jasmine

}

setChromeCaps & setFirefoxCaps
