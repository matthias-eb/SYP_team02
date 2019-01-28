function run_cmd(cmd, args, cb, end) {
    var spawn = require('child_process').spawn,
        child = spawn(cmd, args),
        me = this;
    child.stdout.on('data', function (buffer) { cb(me, buffer) });
    child.stdout.on('end', end);
}

// Run npm start
var foo = new run_cmd(
    'npm', ['start'],
    function (me, buffer) { me.stdout += buffer.toString() },
    function () { console.log(foo.stdout) }
);