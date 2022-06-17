function solve(object) {
    const { method, uri, version, message } = object;
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!validMethods.includes(method) || method == undefined) {
        throw new Error('Invalid request header: Invalid Method');
    }
    const uriPattern = new RegExp(/^([\w.])+$|^\*$/);
    if (!uriPattern.exec(uri) || uri == undefined) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersions.includes(version) || version == undefined) {
        throw new Error('Invalid request header: Invalid Version');
    }
    const messagePattern = new RegExp(/^[^<>\\&\'\"]+$/);
    if ((!messagePattern.exec(message) && message !== '') || message == undefined) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return object;
}

console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
));
console.log(solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}
));
console.log(solve({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}
));