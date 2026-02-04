"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface CountdownProps {
  startDate: Date;
  title?: string;
}

interface TimeLeft {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ startDate, title = "我们在一起" }: CountdownProps) {
  const [timeElapsed, setTimeElapsed] = useState<TimeLeft>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30);
      const years = Math.floor(months / 12);

      setTimeElapsed({
        years,
        months: months % 12,
        days: days % 30,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [startDate]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="relative py-16 md:py-24 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <span className="text-sm tracking-widest text-muted-foreground uppercase">
            {title}
          </span>
          <Heart className="w-5 h-5 text-primary fill-primary" />
        </div>

        <p className="text-muted-foreground mb-8">{formatDate(startDate)}</p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {[
            { value: timeElapsed.years, label: "年" },
            { value: timeElapsed.months, label: "月" },
            { value: timeElapsed.days, label: "天" },
            { value: timeElapsed.hours, label: "时" },
            { value: timeElapsed.minutes, label: "分" },
            { value: timeElapsed.seconds, label: "秒" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square flex items-center justify-center bg-card rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-3xl md:text-5xl font-light text-foreground tabular-nums">
                  {item.value.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="mt-2 text-sm text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-lg text-muted-foreground">
          每一天都是特别的日子
        </p>
      </div>
    </section>
  );
}
