'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function VerifyPage() {
    const [certificateId, setCertificateId] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        if (!certificateId.trim()) return;

        setLoading(true);
        // Redirect to the dynamic route
        router.push(`/verify/${certificateId.trim()}`);
    };

    return (
        <div className="min-h-screen pt-32 pb-12 flex flex-col items-center px-4">
            <div className="w-full max-w-md space-y-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 mb-2">
                        Certificate Verification
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Enter the unique Certificate ID to verify its authenticity.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    onSubmit={handleVerify}
                    className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 space-y-4"
                >
                    <div className="text-left">
                        <label htmlFor="certificateId" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                            Certificate ID
                        </label>
                        <input
                            type="text"
                            id="certificateId"
                            value={certificateId}
                            onChange={(e) => setCertificateId(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-violet-500 outline-none transition-all placeholder:text-neutral-400"
                            placeholder="e.g. NEXUS-2026-X8Y9Z0"
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-12 text-base font-medium"
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Verifying...
                            </span>
                        ) : (
                            'Verify Certificate'
                        )}
                    </Button>

                    <p className="text-xs text-neutral-500 mt-4">
                        If you have trouble verifying your certificate, please contact <br />
                        <a href="mailto:support@nexusnao.com" className="underline hover:text-violet-500">support@nexusnao.com</a>
                    </p>
                </motion.form>
            </div>
        </div>
    );
}
