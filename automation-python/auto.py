import pyautogui as pa
import pyperclip
import time

pa.PAUSE = 2

# Abrir o Windows Terminal
pa.press("win")
pa.write("terminal")
pa.press("enter")
time.sleep(3)

# Abrir guia em Linux - Esperar alguns segundos
pa.hotkey("ctrl", "shift", "4")
time.sleep(12)

# sudo service redis-server start (digitar senha)
pa.write("sudo service redis-server start")
pa.press("enter")
time.sleep(3)
pa.write("123")
pa.press("enter")

# Abrir navegador - Esperar alguns segundos
pa.press("win")
pa.write("mozilla")
pa.press("enter")
time.sleep(5)

# Abrir "https://gitlab.com/"
pyperclip.copy("https://gitlab.com/")
pa.hotkey("ctrl", "v")
pa.press("enter")

# Abrir nova aba e "https://www.notion.so/acelerabit/LifeSprint-29a8f1b2121d4f6790b21a0cc89f88f5"
pa.hotkey("ctrl", "t")
pyperclip.copy("https://www.notion.so/acelerabit/LifeSprint-29a8f1b2121d4f6790b21a0cc89f88f5")
pa.hotkey("ctrl", "v")
pa.press("enter")

# Abrir nova aba e "https://outlook.live.com/mail/0/"
pa.hotkey("ctrl", "t")
pyperclip.copy("https://outlook.live.com/mail/0/")
pa.hotkey("ctrl", "v")
pa.press("enter")

# Abrir discord - Esperar alguns segundos
pa.press("win")
pa.write("discord")
pa.press("enter")
time.sleep(20)

# Abrir servidor Acelerabit
pa.click(x=30, y=111)

# Abrir vscode (Windows + "vscode" + enter) - Esperar poucos segundos
pa.press("win")
pa.write("vscode")
pa.press("enter")
time.sleep(10)

# Colocar em tela cheia pelo mouse
pa.click(x=1409, y=179)

# Abrir nova pasta
pa.hotkey("ctrl", "k", "ctrl", "o")

# Clicar na parte de cima e digitar ("C:\Users\gabri\Documentos\acelerabit\Lifesprint\life-sprint-api") + Enter 3 vezes
pa.hotkey("ctrl", "l")
pyperclip.copy(r"C:\Users\gabri\Documentos\acelerabit\Lifesprint\life-sprint-api")
pa.hotkey("ctrl", "v")

# Abrir arquivo
pa.hotkey("shift", "enter")
pa.hotkey("shift", "enter")
pa.hotkey("shift", "enter")
pa.hotkey("shift", "enter")

# Abrir terminal vscode
time.sleep(7)
pa.click(x=323, y=16)
pa.click(x=369, y=45)
time.sleep(3)

# git merge origin/master
pa.write("git merge origin/master")
pa.press("enter")
time.sleep(10)

# yarn dev
pa.write("yarn dev")
pa.press("enter")

# Nova janela
pa.hotkey("ctrl", "shift", "n")

# Colocar em tela cheia pelo mouse
pa.click(x=1409, y=179)

# Abrir nova pasta
pa.hotkey("ctrl", "k", "ctrl", "o")

# Clicar na parte de cima e digitar ("C:\Users\gabri\Documentos\acelerabit\Lifesprint\life-sprint-web") + Enter 3 vezes
pa.hotkey("ctrl", "l")
pyperclip.copy(r"C:\Users\gabri\Documentos\acelerabit\Lifesprint\life-sprint-web")
pa.hotkey("ctrl", "v")

# Abrir arquivo
pa.hotkey("shift", "enter")
pa.hotkey("shift", "enter")
pa.hotkey("shift", "enter")
pa.hotkey("shift", "enter")

# Abrir terminal vscode
time.sleep(7)
pa.click(x=323, y=16)
pa.click(x=369, y=45)
time.sleep(3)

# git merge origin/master
pa.write("git merge origin/master")
pa.press("enter")
time.sleep(5)

# yarn start
pa.write("yarn start")
pa.press("enter")

# Abrir DBeaver
pa.press("win")
pa.write("dbeaver")
pa.press("enter")

# Abrir Spotify
pa.press("win")
pa.write("spotify")
pa.press("enter")