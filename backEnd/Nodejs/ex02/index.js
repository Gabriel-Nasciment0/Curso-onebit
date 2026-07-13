import fs from "node:fs"
import os from "node:os"

const systemPlatformMap = {
    win32: "Windows",
    linux: "Linux",
    darwin: "MacOS",
    freebsd: "FreeBSD",
}

function getSystemInfo() {
    const system = systemPlatformMap[os.platform()] || os.platform()
    const arch = os.arch()
    const cpu = os.cpus()[0].model

    const totalMem = os.totalmem()
    const freeMem = os.freemem()
    const occupiedMem = totalMem - freeMem
    const usedMem = `${((occupiedMem / totalMem) * 100).toFixed(0)}%`

    const upTime = os.uptime()

    const hours = Math.floor(upTime / 3600)
    const remainingSeconds = upTime % 3600
    const minutes = Math.floor(remainingSeconds / 60)
    const seconds = Math.floor(remainingSeconds % 60)

    const systemUsedTime = `${hours}H ${minutes}M ${seconds}S`

    return {
        system,
        arch,
        cpu,
        usedMem,
        systemUsedTime,
    }
}

function formatInformation({ system, arch, cpu, usedMem, systemUsedTime }) {
    return `DETALHES DO SISTEMA

Sistema Operacional: ${system}
Arquitetura: ${arch}
Modelo do Processador: ${cpu}
Tempo de Atividade do Sistema: ${systemUsedTime}
Uso de Memória: ${usedMem}`
}

function showInformation(text) {
    console.clear()
    console.log(text)
}

function createLogFolder() {
    if (!fs.existsSync("./log")) {
        fs.mkdirSync("./log")
    }
}

function saveInformation(text) {
    fs.appendFile("./log/log.txt", `${text}\n\n`, "utf-8", (error) => {
        if (error) {
            console.log("Erro ao salvar o log.")
        }
    })
}

createLogFolder()

setInterval(() => {
    const info = getSystemInfo()
    const text = formatInformation(info)

    showInformation(text)
    saveInformation(text)
}, 1000)
