import { Editor } from "@monaco-editor/react"

const App = () => {
  return (
    <main className="h-screen w-full bg-gray-950 flex gap-2 p-4">
      {/* Sidebar */}
      <aside className="h-full w-1/4 bg-amber-50 rounded-lg">
      </aside>

      {/* Code Editor */}
      <section className="h-full w-3/4 bg-neutral-800 rounded-lg overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="python"
          defaultValue="# Start Coding"
          theme="vs-dark"
        />
      </section>
    </main>
  )
}

export default App