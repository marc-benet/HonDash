![alt tag](https://raw.github.com/pablobuenaposada/HonDash/master/docs/logo/hondash.png)

## How to run this project in a Raspberry Pi?
Get Raspbian working in your raspberry, more info [here](https://www.raspberrypi.org/downloads/raspbian/)

Open the command line and install this packages:
```sh
sudo apt install libatlas-base-dev
```

Enable SSH and SPI through:
```sh
sudo raspi-config
```
Go to 5.Interfacing options --> enable both SSH and SPI

Clone this project:
```sh
cd /home/pi/Desktop/
git clone https://github.com/pablobuenaposada/HonDash.git
```

Being in the root of the project create de virtual enviroment:
```sh
cd HonDash/
make virtualenv_rpi

```
Later you can just run the project:
```sh
make run_rpi
```

## Optional tricks
### HonDash at startup
```sh
crontab -e
```
add this line:
```sh
@reboot (export DISPLAY=:0 && cd /home/pi/Desktop/HonDash/ && make run_rpi)
```

### Disable screen saver
```sh
sudo apt-get install xscreensaver
```
Go to preference --> screensaver --> disable screensaver.

### Disable SSH warning
```sh
sudo rm /etc/xdg/lxsession/LXDE-pi/sshpwd.sh
```

### Hide mouse pointer
```sh
sudo apt-get install unclutter
vim ~/.config/lxsession/LXDE-pi/autostart
```
add this line:
```sh
@unclutter -idle 0.1
```

### Boot faster
rcconf
disable bluethoot, alsa...


