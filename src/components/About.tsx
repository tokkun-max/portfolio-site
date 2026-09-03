import FadeIn from "./FadeIn";

type ProfileItem = {
  label: string;
  body: string;
};

// 必須5要素（自己紹介作成ガイドより）: 経歴・スキル・実績・人柄・自己PR
// 「受賞歴・実績」は該当実績がないためカードごと削除
const CORE_ITEMS: ProfileItem[] = [
  {
    label: "クリエイターとしての経歴",
    body: "開発の第一歩は、AIオンラインスクールでClaude CodeやGemini CLIといったAIツールの使い方を学んだことでした。そこで得た知識を活かし、趣味のDTM音楽制作を支援するツール（CSV→MIDI変換、対旋律自動生成など）から自作を開始。その後、職業訓練校でJava・Pythonを学びながらも開発の手を止めず、動画編集の自動化ツールや日常業務を効率化するアプリなど、約30本の自作アプリをコツコツ制作してきました。「学んだら、すぐ自分の手で作ってみる」ことを大切にしています。",
  },
  {
    label: "具体的な保有スキル",
    body: "Java・Pythonを用いたWebアプリ開発（Servlet/JSP、Python）に加え、Google Apps Script（GAS）やGemini APIを組み合わせた業務自動化パイプラインの構築が可能です。要件定義から実装まで、Claude Codeなどのチャット型AIと連携しながら開発を進め、コーディングエラーにも自力で迅速に対応できます。Word・Excelは10年以上の使用経験があり、表計算・マクロを含む資料作成にも習熟しています。",
  },
  {
    label: "仕事に活きる趣味・特技",
    body: "趣味はDTMでの音楽制作、動画編集、そしてラップの作詞です。Cubaseと複数のVST3プラグインを使った作曲・編集を続ける中で、「もっと効率よく作業したい」「この作業、自動化できないか」と感じる場面が数多くありました。そのたびに自分の制作フローに合わせたツールを自作するようにしており、これまでにCSV→MIDI変換ツール、対旋律自動生成アプリ、動画処理VST統合ツール、歌詞をもとに曲を組み立てる支援ツールなど、音楽・映像制作を効率化するアプリを複数開発してきました。「不便を感じたら、自分の手でツールを作って解決する」という姿勢は、日々の開発にも自然と活きています。また、作品づくりを通して培った「完成イメージから逆算して工程を組み立てる」感覚も、アプリ設計に役立っていると感じています。",
  },
  {
    label: "強みを発揮したエピソード（自己PR）",
    body: "前職の半導体製造では、精密機器の組み立てを図面通りに正確に再現する業務を約2年間担当し、細部への集中力とミスを許さない品質意識を培いました。1つ1つの工程を丁寧に積み上げ、最後に完成品が仕様通り動く瞬間に大きなやりがいを感じていたことを、今でも覚えています。この「積み上げて、形にする」手応えこそが、アプリ開発にのめり込むきっかけになりました。コードも1行1行が仕様に対して正確でなければ動かないという点で製造の仕事と本質は同じで、動作確認のたびに完成品が意図通り動く瞬間、あの頃と同じ達成感を味わっています。新人指導で培った「複雑なことを整理して伝える力」も、コードのコメントやドキュメント作成に活きています。",
  },
];

// エンジニアならではの+αのアピール要素
const EXTRA_ITEMS: ProfileItem[] = [
  {
    label: "学習・努力の姿勢",
    body: "新しい技術を学ぶときは、まずAIツール（Claude Code・Gemini CLIなど）を使って小さく手を動かしながら理解することを大切にしています。分からない部分は公式ドキュメントで裏取りしつつ、実際にアプリを1本作り切ることで知識を定着させるスタイルです。現在は基本情報技術者試験の学習と並行して、職業訓練校でJava・Pythonを習得中です。",
  },
  {
    label: "目指すエンジニア像",
    body: "「言われた通りに作る」だけでなく、曖昧な課題を自ら整理し、仕様の先にある価値まで提案できるエンジニアを目指しています。まずはシステムエンジニアとして現場での経験を積み、AIツールを活用した開発効率化に強みを持つ人材になりたいと考えています。将来的には、その延長線上で個人開発のAIツール制作にも挑戦し、技術力の幅をさらに広げていきたいです。",
  },
  {
    label: "開発のきっかけ（原体験）",
    body: "きっかけは、趣味のDTM音楽制作の中で感じた「この作業、毎回手間だな」という小さな不便でした。当時はまだプログラミングの知識がありませんでしたが、AIオンラインスクールでClaude CodeやGemini CLIの使い方を学んだことで、「自分の手で不便を解決できるかもしれない」と気づき、初めてツールを自作しました。完成したツールが実際に自分の作業を楽にしてくれた瞬間の手応えが忘れられず、そこから「困りごとがあれば自分で作る」開発が習慣になっていきました。",
  },
];

function ProfileCard({ item, delay }: { item: ProfileItem; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent sm:flex sm:gap-8 sm:p-8">
        <h3 className="text-base font-bold text-foreground sm:w-52 sm:shrink-0 sm:pt-0.5">
          {item.label}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted sm:mt-0">{item.body}</p>
      </div>
    </FadeIn>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <FadeIn>
        <p className="font-mono text-sm text-accent-2">About</p>
        <h2 className="section-heading mt-3">自己紹介</h2>
      </FadeIn>

      <FadeIn
        delay={0.08}
        className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-lg text-muted"
      >
        <span className="text-xl font-bold text-foreground">氏名：徳里貴之</span>
        <span>生年月日: 1995年2月2日</span>
        <span>血液型: A型</span>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-6 max-w-2xl text-muted leading-relaxed">
        <p>図面の正確さで培った品質意識を、AIと共に磨くコードへ。</p>
      </FadeIn>

      <div className="mt-10 flex flex-col gap-5">
        {CORE_ITEMS.map((item, i) => (
          <ProfileCard key={item.label} item={item} delay={0.05 * i} />
        ))}
      </div>

      <FadeIn delay={0.1} className="mt-16">
        <p className="font-mono text-xs text-accent-2">+ α</p>
      </FadeIn>

      <div className="mt-6 flex flex-col gap-5">
        {EXTRA_ITEMS.map((item, i) => (
          <ProfileCard key={item.label} item={item} delay={0.05 * i} />
        ))}
      </div>
    </section>
  );
}
