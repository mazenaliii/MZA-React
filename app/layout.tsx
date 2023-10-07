import styles from './page.module.css'

export const metadata = {
  title: 'MZA',
  description: 'MZA is a full digital company that offers everything belongs to web development services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  )
}
