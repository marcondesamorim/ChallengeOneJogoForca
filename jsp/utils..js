function contentsToWordJson(contents) {
    return JSON.stringify({
        contents: contents,
        played: false
    });
}