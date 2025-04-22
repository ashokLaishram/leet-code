# System Design: File Upload Feature (Like S3)

## Use Case
Allow users to upload documents/images to a cloud storage bucket, store them securely, and optionally generate a downloadable link.

## Tech Stack
- Frontend: React Native or Web
- Backend: Node.js / Flask
- Storage: Amazon S3 (Private bucket)
- Auth: Cognito / IAM roles
- Optional: PostgreSQL for metadata

## Design Flow

1. Frontend selects a file
2. Calls backend API to get a **pre-signed upload URL**
3. Uploads file **directly to S3** using that URL
4. Backend logs metadata (file name, S3 key, owner ID, timestamp)

## Security
- S3 bucket is **private**
- Uses IAM role with `s3:PutObject`, `s3:GetObject`
- Pre-signed URLs expire in 5–15 minutes
- Validation of file size and type on backend

## Considerations
- Scales well — avoids backend bottlenecks
- Easy to set expiration/lifecycle rules in S3
- Supports versioning, tagging, and object metadata

## Sample S3 Pre-signed URL (Node.js AWS SDK v3)

```ts
const url = await getSignedUrl(client, new PutObjectCommand({
  Bucket: 'your-bucket',
  Key: 'uploads/user-123/image.jpg',
  ContentType: 'image/jpeg'
}), { expiresIn: 300 });
