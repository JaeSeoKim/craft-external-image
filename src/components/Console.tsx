import React, { useState } from "react";
import { LogType } from "./ConsoleProvider";

const LogContainer: {
  log: React.FC<React.PropsWithChildren<{}>>;
  warn: React.FC<React.PropsWithChildren<{}>>;
  error: React.FC<React.PropsWithChildren<{}>>;
} = {
  log: ({ children }) => (
    <div className="flex flex-col gap-2 text-craftSmall p-2">{children}</div>
  ),
  warn: ({ children }) => (
    <div className="bg-yellow-100 text-yellow-700 flex flex-col gap-2 text-craftSmall p-2">
      {children}
    </div>
  ),
  error: ({ children }) => (
    <div className="bg-red-100 text-red-700 flex flex-col gap-2 text-craftSmall p-2">
      {children}
    </div>
  ),
};

const Log: React.FC<
  LogType & {
    onDelete: () => void;
  }
> = ({ data, timeStamp, type, onDelete }) => {
  const Container = LogContainer[type];
  return (
    <Container>
      <div className="flex justify-between font-light">
        <span>{timeStamp.toUTCString()}</span>
        <button className="select-none" onClick={onDelete}>
          🗑
        </button>
      </div>
      <pre className="inline-block font-mono break-all whitespace-pre-line">
        <code>
          {data
            .map((v) => {
              if (v !== null && typeof v === "object") {
                return JSON.stringify(v, null, 2);
              }
              return v.toString();
            })
            .join("\n")}
        </code>
      </pre>
    </Container>
  );
};

const Console: React.FC<{
  logs: LogType[];
  setLogs: React.Dispatch<React.SetStateAction<LogType[]>>;
}> = ({ logs, setLogs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        className="flex justify-center items-center h-12 text-craftBody font-semibold bg-zinc-300 dark:bg-zinc-800"
        onClick={() => setIsOpen((p) => !p)}
      >
        Console 🛰 - ({logs.length})
      </button>
      {isOpen && (
        <div className="flex flex-col max-h-64 overflow-y-auto overflow-x-hidden bg-zinc-100 dark:bg-zinc-700">
          {logs.map((log) => (
            <Log
              key={log.id}
              {...log}
              onDelete={() => setLogs((p) => p.filter((v) => v.id !== log.id))}
            />
          ))}
          <button
            className="sticky bottom-0 bg-zinc-300 dark:bg-zinc-800 py-2"
            onClick={() => setLogs([])}
          >
            Clear All Logs
          </button>
        </div>
      )}
    </div>
  );
};

export default Console;
