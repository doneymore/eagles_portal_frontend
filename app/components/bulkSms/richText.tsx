"use client";
import React, { useState, useEffect } from "react";
import { MessageSquare, Eye, Edit3, Code } from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
}) => {
  const [MDEditor, setMDEditor] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mode, setMode] = useState<"edit" | "preview" | "live">("edit");

  useEffect(() => {
    const loadMDEditor = async () => {
      try {
        const { default: MDEditorComponent } = await import(
          "@uiw/react-md-editor"
        );
        setMDEditor(() => MDEditorComponent);
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to load MD Editor:", error);
      }
    };

    loadMDEditor();
  }, []);

  if (!isLoaded || !MDEditor) {
    return (
      <div className="mb-8">
        <label className="flex items-center text-lg font-semibold text-gray-800 mb-4">
          <MessageSquare className="w-5 h-5 mr-2 text-indigo-600" />
          Message Content
        </label>
        <div className="border-2 border-gray-200 rounded-xl p-4 min-h-[200px] flex items-center justify-center">
          <div className="animate-pulse text-gray-500">Loading editor...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <label className="flex items-center text-lg font-semibold text-gray-800 mb-4">
        <MessageSquare className="w-5 h-5 mr-2 text-indigo-600" />
        Message Content
      </label>

      {/* Mode Toggle Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setMode("edit")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            mode === "edit"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <Edit3 className="w-4 h-4" />
          Edit
        </button>
        <button
          type="button"
          onClick={() => setMode("preview")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            mode === "preview"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <Eye className="w-4 h-4" />
          Preview
        </button>
        <button
          type="button"
          onClick={() => setMode("live")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            mode === "live"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <Code className="w-4 h-4" />
          Live
        </button>
      </div>

      <div className="markdown-editor">
        <MDEditor
          value={value}
          onChange={(val) => onChange(val || "")}
          preview={mode}
          height={300}
          visibleDragBar={false}
          data-color-mode="light"
          textareaProps={{
            placeholder:
              "Type your message here...\n\n**Bold text**\n*Italic text*\n- List item\n[Link](https://example.com)",
            style: {
              fontSize: 16,
              lineHeight: 1.6,
              fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace",
            },
          }}
        />
      </div>

      {/* Helper Text */}
      <div className="mt-3 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
        <p className="font-medium mb-2">Markdown formatting tips:</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <span>**Bold** or __Bold__</span>
          <span>*Italic* or _Italic_</span>
          <span># Heading 1</span>
          <span>## Heading 2</span>
          <span>- List item</span>
          <span>1. Numbered list</span>
          <span>[Link](url)</span>
          <span>`Code`</span>
        </div>
      </div>

      <style jsx global>{`
        .markdown-editor .w-md-editor {
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          overflow: hidden;
        }

        .markdown-editor .w-md-editor:hover {
          border-color: #a5b4fc;
        }

        .markdown-editor .w-md-editor.w-md-editor-focus {
          border-color: #6366f1 !important;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .markdown-editor .w-md-editor-text-textarea,
        .markdown-editor .w-md-editor-text {
          font-size: 16px !important;
          line-height: 1.6 !important;
        }

        .markdown-editor .w-md-editor-text-textarea {
          padding: 16px !important;
        }

        .markdown-editor .w-md-editor-preview {
          padding: 16px !important;
        }

        .markdown-editor .w-md-editor-toolbar {
          padding: 8px 16px;
          border-bottom: 1px solid #e5e7eb;
          background: #f9fafb;
        }

        .markdown-editor .w-md-editor-toolbar-divider {
          border-color: #d1d5db;
        }

        .markdown-editor .w-md-editor-toolbar ul li button {
          color: #4b5563;
          border-radius: 6px;
        }

        .markdown-editor .w-md-editor-toolbar ul li button:hover {
          background: #e5e7eb;
          color: #1f2937;
        }

        .markdown-editor .w-md-editor-toolbar ul li button.active {
          background: #6366f1;
          color: white;
        }

        /* Dark mode support */
        [data-color-mode="dark"] .markdown-editor .w-md-editor {
          border-color: #374151;
        }

        [data-color-mode="dark"] .markdown-editor .w-md-editor-toolbar {
          background: #1f2937;
          border-bottom-color: #374151;
        }
      `}</style>
    </div>
  );
};
