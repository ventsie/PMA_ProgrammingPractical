function App(name, logo, welcomemessage, logoutmessage, updateURL) {
    this.name = name;
    this.logo = logo;
    this.welcomemessage = welcomemessage;
    this.logoutmessage = logoutmessage;
    this.updateURL = updateURL;

    this.open = function () {
        console.log(welcomemessage);
        // Using document.write for testing purposes only, in a real world scenario would use Document Object Model
        document.writeln(welcomemessage);
        document.writeln("<br>");
    }
    this.close = function () {
        console.log(logoutmessage);
        // Using document.write for testing purposes only, in a real world scenario would use Document Object Model
        document.writeln(logoutmessage);
        document.writeln("<br>");
    }
    this.update = function () {
        windоw.lоcation.replace(updateURL);
    }
}

function callMethods(objectName) {
    objectName.open();
    objectName.close();
    objectName.update();
}

var facebook = new App("Facebook", "logo.gif", "Welcome Dude", "Goodbye", "https://facebook.com/update/");
callMethods(facebook);

var instagram = Object.create(facebook);
instagram.name = "Instagram";
instagram.updateURL = "https://instagram.com/update/";
callMethods(instagram);