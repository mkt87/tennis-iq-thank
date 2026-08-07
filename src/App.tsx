/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4eedc] text-[#111] font-sans flex flex-col items-center selection:bg-[#ffe600]">
      <div className="flex-1 w-full flex flex-col items-center pt-12 pb-12 px-4">
        <main className="w-full max-w-2xl bg-white border-4 border-black shadow-[6px_6px_0px_#000] p-8 md:p-12 rounded-xl text-center mb-12">
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 text-red-600 tracking-tight leading-tight">
          登録はまだ<br />終わっていません
        </h1>

        <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-6">
          今すぐスマホでLINEに登録して<br />
          特典を受け取ってください。
        </p>

        <p className="text-4xl md:text-5xl font-black mb-10">
          ↓　↓　↓
        </p>

        <section className="mb-12 flex flex-col items-center">
          <h2 className="inline-block text-2xl md:text-3xl font-black mb-6 px-2 shadow-[inset_0_-12px_0_#ffe600] md:shadow-[inset_0_-16px_0_#ffe600] tracking-wide">
            ①友達登録
          </h2>
          <p className="font-bold mb-6 text-center leading-relaxed">
            スマートフォンでご覧の方は、<br />
            以下の「友だち追加」ボタンを押してご登録ください。
          </p>
          <a href="#" className="inline-block w-full max-w-xl bg-[#06C755] text-white font-black text-2xl md:text-3xl lg:text-4xl py-6 md:py-8 px-6 rounded-full border-4 border-black shadow-[6px_6px_0px_#000] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_#000] transition-all text-center tracking-wider">
            【友達追加はこちら】
          </a>
        </section>

        <section className="mb-12 flex flex-col items-center">
          <h2 className="inline-block text-2xl md:text-3xl font-black mb-6 px-2 shadow-[inset_0_-12px_0_#ffe600] md:shadow-[inset_0_-16px_0_#ffe600] tracking-wide">
            ②QRコードを読み取る場合
          </h2>
          <div className="w-56 h-56 bg-gray-200 border-4 border-black shadow-[4px_4px_0px_#000] flex flex-col items-center justify-center text-gray-500 font-bold rounded-lg">
            <span>QRコード画像</span>
          </div>
        </section>

        <section className="mb-6 flex flex-col items-center">
          <h2 className="inline-block text-2xl md:text-3xl font-black mb-6 px-2 shadow-[inset_0_-12px_0_#ffe600] md:shadow-[inset_0_-16px_0_#ffe600] tracking-wide">
            ③ID検索の場合
          </h2>
          <input 
            type="text" 
            readOnly 
            value="@line_id" 
            className="w-full max-w-xs bg-gray-100 border-4 border-black shadow-[4px_4px_0px_#000] p-4 text-center font-bold text-2xl text-gray-600 rounded-lg outline-none cursor-default"
          />
        </section>

      </main>

      <footer className="w-full max-w-2xl flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-bold">
        <a href="https://privacy-iota-pied.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">プライバシーポリシー</a>
        <a href="https://tennis-iq-transactions.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">特定商取引法に基づく表記</a>
        <a href="#" className="hover:underline">お問い合わせ</a>
      </footer>
      </div>
      <div className="w-full bg-black text-white text-center py-6 font-bold text-sm tracking-wider">
        © 大人のテニスIQ戦略 動画プログラム
      </div>
    </div>
  );
}
