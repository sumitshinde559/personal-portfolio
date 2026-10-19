import { CheckCircle, AlertCircle } from "lucide-react";

export const StatusMessage = ({ type, message }) => {
  if (!type) return null;

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-xl ${
        type === "success"
          ? "bg-green-500/10 border border-green-500/20 text-green-400"
          : "bg-red-500/10 border border-red-500/20 text-red-400"
      }`}
    >
      {type === "success" ? (
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 flex-shrink-0" />
      )}
      <p className="text-sm">{message}</p>
    </div>
  );
};
