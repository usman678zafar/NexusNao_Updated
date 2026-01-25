'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface CertificateData {
    certificateId: string;
    recipientName: string;
    sessionName: string;
    issueDate: string;
    valid: boolean;
}

export default function CertificateViewPage({ params }: { params: Promise<{ id: string }> }) {
    const [resolvedParams, setParams] = useState<{ id: string } | null>(null);
    const [certificate, setCertificate] = useState<CertificateData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        params.then(setParams);
    }, [params]);

    useEffect(() => {
        if (!resolvedParams?.id) return;

        const fetchCertificate = async () => {
            try {
                const res = await fetch(`/api/certificates/verify?id=${resolvedParams.id}`);
                const data = await res.json();

                if (res.ok && data.valid) {
                    setCertificate(data.data);
                } else {
                    setError(data.message || 'Certificate not found');
                }
            } catch (err) {
                setError('Failed to verify certificate');
            } finally {
                setLoading(false);
            }
        };

        fetchCertificate();
    }, [resolvedParams]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500"></div>
            </div>
        );
    }

    if (error || !certificate) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4 pt-24">
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl max-w-md w-full border border-red-200 dark:border-red-800">
                    <div className="bg-red-100 dark:bg-red-900/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-2">Verification Failed</h2>
                    <p className="text-neutral-600 dark:text-neutral-300">{error}</p>
                    <div className="mt-6">
                        <Button variant="outline" onClick={() => window.location.href = '/verify'}>
                            Try Another ID
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-16 px-4 bg-neutral-50 dark:bg-neutral-950 flex flex-col items-center font-sans">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-lg bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden mt-12"
            >
                {/* Status Header */}
                <div className="bg-green-500 text-white p-8 text-center">
                    <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight">Verified</h1>
                    <p className="text-green-50 font-medium mt-2 text-lg">Certificate is valid & authentic.</p>
                </div>

                {/* Details List */}
                <div className="p-8 space-y-6">

                    <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-bold mb-2">Recipient Name</p>
                        <p className="text-2xl font-semibold text-neutral-900 dark:text-white leading-tight">{certificate.recipientName}</p>
                    </div>

                    <div className="h-px bg-neutral-100 dark:bg-neutral-800" />

                    <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-bold mb-2">Session / Event</p>
                        <p className="text-lg font-medium text-neutral-900 dark:text-white leading-snug">{certificate.sessionName}</p>
                    </div>

                    <div className="h-px bg-neutral-100 dark:bg-neutral-800" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-bold mb-1">Issue Date</p>
                            <p className="text-base font-medium text-neutral-900 dark:text-white">
                                {new Date(certificate.issueDate).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-bold mb-1">Certificate ID</p>
                            <p className="text-base font-mono font-medium text-violet-600 dark:text-violet-400">{certificate.certificateId}</p>
                        </div>
                    </div>

                    <div className="pt-8">
                        <Button variant="outline" className="w-full h-12 text-base" onClick={() => window.location.href = '/verify'}>
                            Check Another Certificate
                        </Button>
                    </div>

                </div>
            </motion.div>

            <div className="mt-8 text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                    {/* Small Logo Icon */}
                    <div className="h-6 w-6 relative">
                        <img src="/logo2.png" alt="" className="h-full w-full object-contain opacity-50 grayscale" />
                    </div>
                    <span className="text-sm font-semibold text-neutral-400">Nexus Nao Verification</span>
                </div>
                <p className="text-xs text-neutral-400">
                    Transforming Ideas into Digital Reality
                </p>
            </div>
        </div>
    );
}
