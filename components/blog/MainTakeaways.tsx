import {
  Rocket,
  Target,
  Zap,
  Code,
  Database,
  Server,
  Globe,
  Shield,
  CloudLightning as Lightning,
  Cpu,
} from "lucide-react";
import styles from "./MainTakeaways.module.css";

interface MainTakeawaysProps {
  takeaways: string[];
  title?: string;
}

const icons = [
  Rocket,
  Target,
  Zap,
  Code,
  Database,
  Server,
  Globe,
  Shield,
  Lightning,
  Cpu,
];

const getRandomIcon = (index: number) => {
  return icons[index % icons.length];
};

export function MainTakeaways({
  takeaways,
  title = "Main Takeaways",
}: MainTakeawaysProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 via-orange-400/5 to-cyan-400/10 border border-orange-500/20 p-8 mb-8 ${styles.blogTakeaways}`}
    >
      {/* Space-themed background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-4 right-8 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-12 right-16 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-16 right-24 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Rocket icon in top right */}
      <div className="absolute top-6 right-6 opacity-20">
        <Rocket className="w-8 h-8 text-orange-400]" />
      </div>

      <div className="relative z-10">
        <div className={`${styles.headerContainer}`}>
          <div
            className={`flex items-center justify-center w-10 h-10 ${styles.headerIcon}`}
          >
            <div className={`${styles.headerIconInner}`}>
              <Target className="w-5 h-5 text-white" />
            </div>
          </div>
          <h3 className={`text-xl font-semibold font-mono ${styles.title}`}>
            {title}
          </h3>
        </div>

        <div>
          {takeaways.map((takeaway, index) => {
            const IconComponent = getRandomIcon(index);

            return (
              <div key={index} className={`${styles.itemContainer}`}>
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-lg ${styles.iconContainer}`}
                >
                  <IconComponent className={`w-4 h-4 ${styles.icon}`} />
                </div>
                <div className={`${styles.itemContent}`}>
                  <p className={`${styles.description}`}>{takeaway}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-cyan-400/5 pointer-events-none"></div>
    </div>
  );
}
