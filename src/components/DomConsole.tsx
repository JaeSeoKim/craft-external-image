import React, { useEffect, useMemo, useState } from 'react'
import { nanoid } from 'nanoid'
import Console from './Console'

export type LogType = {
  id: string
  type: 'log' | 'warn' | 'error'
  timeStamp: Date
  data: any[]
}

const DomConsole: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [logs, setLogs] = useState<LogType[]>([])

  const console = useMemo(() => {
    const logger = (type: LogType['type'], ...args: any[]) => {
      setLogs(prev => [
        ...prev,
        {
          id: nanoid(),
          timeStamp: new Date(),
          type: type,
          data: args,
        },
      ])
    }

    return {
      log: (...args: any[]) => logger('log', ...args),
      warn: (...args: any[]) => logger('warn', ...args),
      error: (...args: any[]) => logger('error', ...args),
    }
  }, [setLogs])

  useEffect(() => {
    const oriConsoleLog = window.console.log
    const oriConsoleWarn = window.console.warn
    const oriConsoleError = window.console.error

    window.console.log = (...args) => {
      oriConsoleLog(...args)
      console.log(...args)
    }
    window.console.warn = (...args) => {
      oriConsoleWarn(...args)
      console.warn(...args)
    }
    window.console.error = (...args) => {
      oriConsoleError(...args)
      console.error(...args)
    }

    return () => {
      window.console.log = oriConsoleLog
      window.console.warn = oriConsoleWarn
      window.console.error = oriConsoleError
    }
  }, [console])

  return (
    <div className="flex flex-col justify-between min-h-screen max-h-screen">
      {children}
      <Console logs={logs} setLogs={setLogs} />
    </div>
  )
}

export default DomConsole
