'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Certificate {
    _id: string;
    certificateId: string;
    recipientName: string;
    recipientEmail: string;
    sessionName: string;
    issueDate: string;
}

export default function AdminCertificatesPage() {
    const [certificates, setCertificates] = useState<Certificate[]>([]);
    const [loading, setLoading] = useState(true);

    // Form State
    const [recipientName, setRecipientName] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');
    const [sessionName, setSessionName] = useState('AI-Powered Full Stack Development Session');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const fetchCertificates = async () => {
        try {
            const res = await fetch('/api/certificates');
            const data = await res.json();
            if (data.success) {
                setCertificates(data.data);
            }
        } catch (err) {
            console.error('Failed to load certificates');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCertificates();
    }, []);

    const handleIssue = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            const res = await fetch('/api/certificates/issue', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ recipientName, recipientEmail, sessionName }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage('Certificate issued successfully!');
                setRecipientName('');
                setRecipientEmail('');
                // Refresh list
                fetchCertificates();
            } else {
                setMessage(data.error || 'Failed to issue certificate');
            }
        } catch (err) {
            setMessage('An error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 p-6 md:p-12">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Certificate Management</h1>
                    <p className="text-neutral-500">Issue and manage certificates for Nexus Nao sessions.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Issue Form */}
                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 h-fit">
                        <h2 className="text-xl font-semibold mb-6">Issue New Certificate</h2>
                        <form onSubmit={handleIssue} className="space-y-4">

                            <div>
                                <label className="block text-sm font-medium mb-1">Session Name</label>
                                <input
                                    type="text"
                                    value={sessionName}
                                    onChange={(e) => setSessionName(e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg border bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-violet-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Recipient Name</label>
                                <input
                                    type="text"
                                    value={recipientName}
                                    onChange={(e) => setRecipientName(e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg border bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-violet-500"
                                    placeholder="e.g. John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Recipient Email</label>
                                <input
                                    type="email"
                                    value={recipientEmail}
                                    onChange={(e) => setRecipientEmail(e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg border bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-violet-500"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            {message && (
                                <p className={`text-sm ${message.includes('success') ? 'text-green-600' : 'text-red-500'}`}>
                                    {message}
                                </p>
                            )}

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? 'Issuing...' : 'Issue Certificate'}
                            </Button>
                        </form>
                    </div>

                    {/* List */}
                    <div className="lg:col-span-2 bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Recent Certificates</h2>
                            <Button variant="outline" size="sm" onClick={fetchCertificates}>
                                Refresh
                            </Button>
                        </div>

                        {loading ? (
                            <div className="space-y-4 animate-pulse">
                                {[1, 2, 3].map(i => <div key={i} className="h-12 bg-neutral-100 dark:bg-neutral-800 rounded"></div>)}
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="border-b border-neutral-200 dark:border-neutral-800">
                                        <tr>
                                            <th className="pb-3 font-medium text-neutral-500">ID</th>
                                            <th className="pb-3 font-medium text-neutral-500">Name</th>
                                            <th className="pb-3 font-medium text-neutral-500">Session</th>
                                            <th className="pb-3 font-medium text-neutral-500">Date</th>
                                            <th className="pb-3 font-medium text-neutral-500">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                                        {certificates.map((cert) => (
                                            <tr key={cert._id} className="group hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                                                <td className="py-3 font-mono text-xs">{cert.certificateId}</td>
                                                <td className="py-3 font-medium">{cert.recipientName}</td>
                                                <td className="py-3 text-neutral-500 truncate max-w-[150px]">{cert.sessionName}</td>
                                                <td className="py-3 text-neutral-500">
                                                    {new Date(cert.issueDate).toLocaleDateString()}
                                                </td>
                                                <td className="py-3">
                                                    <Link
                                                        href={`/verify/${cert.certificateId}`}
                                                        target="_blank"
                                                        className="text-violet-500 hover:underline"
                                                    >
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                        {certificates.length === 0 && (
                                            <tr>
                                                <td colSpan={5} className="py-8 text-center text-neutral-500">
                                                    No certificates issued yet.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
