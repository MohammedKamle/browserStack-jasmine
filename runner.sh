common_env(){
    export BUILD="InterviewKickStart -Sample Build"
}

test1(){
 export OS_VERSION="10"
 export BROWSERNAME="Chrome"
 export BROWSER_VERSON="88"
 export OS="Windows"
 export NAME="InterviewKickStart -Sample Test 1"
 export TEST_FILE="example1.spec.js"
 gulp 
}

test2(){
export OS_VERSION="10"
 export BROWSERNAME="Firefox"
 export BROWSER_VERSON="77"
 export OS="Windows"
 export NAME="InterviewKickStart -Sample Test 1"
 export TEST_FILE="example2.spec.js"
 gulp
}

common_env
test1 & test2