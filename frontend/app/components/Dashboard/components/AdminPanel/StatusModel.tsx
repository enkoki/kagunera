"use client"
import React from "react"

interface StatusModalProps {
    isOpen: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
    onClose: () => void;
}

const StatusModal = ({ isOpen, type, title, message, onClose }: StatusModalProps) => {
    if (!isOpen) return null;

    const isSuccess = type === 'success';

    return (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-neutral-900 border border-neutral-800 w-full max-w-sm rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-200 text-center">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl ${
                    isSuccess ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                }`}>
                    {isSuccess ? '✅' : '❌'}
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{message}</p>
                <button
                    onClick={onClose}
                    className={`w-full py-2.5 rounded-xl font-bold transition-all active:scale-95 ${
                        isSuccess ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-800 text-white hover:bg-neutral-700'
                    }`}
                >
                    Dismiss
                </button>
            </div>
        </div>
    );
};

export default StatusModal;