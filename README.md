If you have already added the files to be tracked, you need to remove them from tracking
```git
git rm .env --cached
```

## Configuração de ambiente do WSL (Windows Subsystem for Linux)
* [Guia Docker para WSL2](https://github.com/codeedu/wsl2-docker-quickstart)
* [Guia para configuração de terminal](https://www.youtube.com/watch?v=Voei5KJaeIA&t=23s)

* Baixar o **Ubuntu** na Microsoft Store
* Baixar o **Windows Terminal** na Microsoft Store
* Baixar o **Windows PowerToys** (não obrigatório)
* Painel de Controle / Programas / Ativar ou desativar recursos do Windows / Subsistema do Windows para Linux
* Ou execute no Windows PowerShell em Modo Administrador
```shell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
* _PARA VSCODE_ > Instalar a extensão "Remote - WSL"
* 
