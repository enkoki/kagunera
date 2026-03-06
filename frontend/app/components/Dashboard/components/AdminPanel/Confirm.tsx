"use client"
import React from "react"

interface ConfirmModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
    isLoading?: boolean;
}

const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel, isLoading }: ConfirmModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-150 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
            <div 
                className="bg-neutral-900 border border-neutral-800 w-full max-w-sm rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-4 text-xl">
                    ⚠️
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                    {message}
                </p>

                <div className="flex gap-3">
                    <button
                        onClick={onCancel}
                        disabled={isLoading}
                        className="flex-1 px-4 py-2.5 rounded-xl border border-neutral-800 text-neutral-400 font-bold hover:bg-neutral-800 transition-all disabled:opacity-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={isLoading}
                        className="flex-1 px-4 py-2.5 rounded-xl bg-red-600 text-white font-bold hover:bg-red-500 transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-red-900/20"
                    >
                        {isLoading ? "Revoking..." : "Confirm"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;