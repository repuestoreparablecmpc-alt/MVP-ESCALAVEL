@echo off
title Iniciar Projeto
echo ==============================================
echo       Iniciando o Servidor Local do Site
echo ==============================================
echo.

IF NOT EXIST node_modules\ (
    echo A pasta node_modules nao foi encontrada.
    echo Instalando as dependencias necessarias, por favor aguarde...
    call npm install
    echo.
) ELSE (
    echo Dependencias ja estao instaladas com sucesso.
    echo.
)

echo Preparando para subir a aplicacao...
echo Verifique o link do localhost gerado abaixo:
echo.
call npm run dev

echo.
echo O servidor foi encerrado.
pause
