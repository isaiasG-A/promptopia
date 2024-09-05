//Import CSS to our entire application
import '@styles/globals.css';

//Change metadata of our application
export const metadata = {
  title: 'Promtopia',
  description: 'Discover & Share AI Prompts',

}

//Root Layout will be wrapped around every component
function RootLayout({children}) {
  return (
    //html content
    <html lang='en'>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;