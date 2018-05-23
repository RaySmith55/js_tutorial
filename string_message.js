function string_message(string) {
    if (string) {
        return "The string is nonempty";
    } else {
        return "It's an empty string!";
    }
}

console.log(string_message("test"));