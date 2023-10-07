import styles from './page.module.css'
import logo from '/MZA_Logo_No_Text_-removebg-preview.png'


export const metadata = {
  title: 'MZA',
  description: 'MZA is a full digital company that offers everything belongs to web development services',
  image: logo,
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
