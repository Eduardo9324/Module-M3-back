/* console.log(Object.keys(process)); */  

const commands = require("./commands/index")

/* // Output un prompt
    process.stdout.write('prompt > ');
    // El evento stdin 'data' se dispara cuando el user escribe una línea
    process.stdin.on('data', function (data) {
      var cmd = data.toString().trim(); // remueve la nueva línea

      if (cmd === 'pwd') {
        process.stdout.write(process.cwd())
      }
      else if (cmd === "date") {                 ESTA FORMA NO ES ESCALABLE !!!
        process.stdout.write(Date())
      }
      process.stdout.write('\nprompt > ');
    }); */


    process.stdout.write('prompt > ');
    // El evento stdin 'data' se dispara cuando el user escribe una línea
    process.stdin.on('data', function (data) {
     // var cmd = data.toString().trim();
    var [cmd, ...args] = data.toString().trim().split(' ');

      if (commands[cmd]) {
        commands[cmd](args);
      }


      process.stdout.write('\nprompt > ');
    });