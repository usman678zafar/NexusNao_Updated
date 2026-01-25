import mongoose, { Schema, Document } from 'mongoose';

export interface ICertificate extends Document {
    certificateId: string;
    recipientName: string;
    recipientEmail: string;
    sessionName: string;
    issueDate: Date;
    valid: boolean;
}

const CertificateSchema = new Schema<ICertificate>(
    {
        certificateId: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        recipientName: {
            type: String,
            required: true,
        },
        recipientEmail: {
            type: String,
            required: true,
        },
        sessionName: {
            type: String,
            required: true,
        },
        issueDate: {
            type: Date,
            default: Date.now,
        },
        valid: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

// Prevent overwrite model error
const Certificate = mongoose.models.Certificate || mongoose.model<ICertificate>('Certificate', CertificateSchema);

export default Certificate;
