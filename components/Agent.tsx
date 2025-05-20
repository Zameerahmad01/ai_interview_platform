import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

enum CallStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  IN_CALL = "IN_CALL",
  ENDED = "ENDED",
}

const Agent = ({ userName }: AgentProps) => {
  const callStatus = CallStatus.ACTIVE; // Replace with actual logic to determine the call status
  const isSpeaking = true; // Replace with actual logic to determine if the agent is speaking
  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="vapi"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak"></span>}
          </div>
          <h3>Ai Interviewer</h3>
        </div>
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="user"
              width={540}
              height={540}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        {callStatus === "ACTIVE" ? (
          <button className="btn-disconnect">End</button>
        ) : (
          <button className="relative btn-call">
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus !== "CONNECTING" && "hidden"
              )}
            ></span>
            <span>
              {callStatus === "INACTIVE" || callStatus === "ENDED"
                ? "call"
                : "connecting"}
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;
