function CheckUserName(userName, minimumLength, maximumLength, errorMessage, redirectionURL) {
    if (minimumLength > maximumLength) {
        console.log("The minimum length cannot be more than the maximum length!");
    } else {
        if ((userName.length >= minimumLength) && (userName.length <= maximumLength)) {
            console.log("ACCEPTED");
            windоw.lоcation.replace(redirectionURL);
        } else {
            console.log(errorMessage);
        }
    }
}

CheckUserName("ven", 3, 6, "Username does not satisfy the requirements!", "www.bing.com");
