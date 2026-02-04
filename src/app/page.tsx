import { Countdown } from "@/components/countdown";
import { PhotoGallery } from "@/components/photo-gallery";
import { Heart } from "lucide-react";

// 设置你们的纪念日日期
const ANNIVERSARY_DATE = new Date("2023-02-14");

// 照片数据 - 来自 public/images 文件夹
const photos = [
  {
    id: 1,
    src: "/images/v2-dc57b8416c5894f7d2477b93a57b8835_1440w_副本.png",
    date: "2023年2月14日",
    description: "我们第一次相遇，海边的日落特别美",
  },
  {
    id: 2,
    src: "/images/v2-dc57b8416c5894f7d2477b93a57b8835_1440w_副本2.png",
    date: "2023年4月20日",
    description: "一起喝咖啡的午后时光，聊了好多好多",
  },
  {
    id: 3,
    src: "/images/v2-dc57b8416c5894f7d2477b93a57b8835_1440w_副本3.png",
    date: "2023年6月15日",
    description: "春日野餐，阳光正好，微风不燥",
  },
  {
    id: 4,
    src: "/images/v2-f018c73b5f1ff3911657dfb8491b9480_1440w_副本.png",
    date: "2023年8月8日",
    description: "星光下的约会，你说这是最浪漫的夜晚",
  },
  {
    id: 5,
    src: "/images/v2-f018c73b5f1ff3911657dfb8491b9480_1440w_副本2.png",
    date: "2023年10月1日",
    description: "一起做饭的日常，简单却幸福",
  },
  {
    id: 6,
    src: "/images/v2-f018c73b5f1ff3911657dfb8491b9480_1440w_副本3.png",
    date: "2024年1月1日",
    description: "新年第一缕阳光，希望每年都与你一起",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-8 pb-4 text-center">
        <h1 className="text-2xl md:text-3xl font-light text-foreground tracking-wide">
          我们的故事
        </h1>
      </header>

      {/* Countdown Section */}
      <Countdown startDate={ANNIVERSARY_DATE} title="我们在一起" />

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="h-px w-16 bg-border" />
        <Heart className="w-4 h-4 text-primary/50" />
        <div className="h-px w-16 bg-border" />
      </div>

      {/* Photo Gallery */}
      <PhotoGallery photos={photos} />

      {/* Footer */}
      <footer className="py-12 text-center">
        <p className="text-sm text-muted-foreground">
          爱你，每一天 <span className="text-primary">♥</span>
        </p>
      </footer>
    </main>
  );
}
