common_env(){
    export BUILD="InterviewKickStart -Sample Build"
}

test(){
 export OS_VERSION="10"
 export BROWSERNAME="Firefox"
 export BROWSER_VERSON="77"
 export OS="Windows"
 export NAME="InterviewKickStart -Sample Test 1"
 export TEST_FILE="example1.spec.js"
    jasmine tests/example1.spec.js &
     jasmine tests/example2.spec.js 
}

common_env
test