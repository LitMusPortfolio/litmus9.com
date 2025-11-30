import styled from "styled-components";
import { theme } from "@/styles/theme";

// 基本セクションコンポーネント
export const Section = styled.section`
  min-height: 100vh;
  padding: ${theme.space["2xl"]} 0;
  position: relative;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

// コンテナコンポーネント
export const Container = styled.div`
  margin: 0 auto;
  padding: 2% 4%;
  width: 85%;
  position: relative;
  z-index: ${theme.zIndex.content};
`;

// サイドデコレーション用スタイルコンポーネント
const DecorationContainer = styled.div<{ $side: "left" | "right" }>`
  position: fixed;
  ${({ $side }) => ($side === "right" ? "right: -20vw" : "left: -20vw")};
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  width: 40vw;
  height: 15vh;
  z-index: ${({ $side }) => ($side === "right" ? -200 : -50)};
  pointer-events: none;
`;

const DecorationImage = styled.img<{ $clipTop: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: auto;
  opacity: ${theme.opacity[80]};
  clip-path: ${({ $clipTop }) =>
    $clipTop ? "inset(0 0 50% 0)" : "inset(50% 0 0 0)"};
`;

// サイドデコレーションコンポーネント
type SideDecorationProps = {
  svgPath?: string;
};

export function SideDecoration({ svgPath }: SideDecorationProps) {
  if (!svgPath) return null;

  return (
    <>
      {/* 右側に配置 - 下半分を表示 */}
      <DecorationContainer $side="right">
        <DecorationImage src={svgPath} alt="" $clipTop />
      </DecorationContainer>

      {/* 左側に配置 - 上半分を表示 */}
      <DecorationContainer $side="left">
        <DecorationImage src={svgPath} alt="" $clipTop={false} />
      </DecorationContainer>
    </>
  );
}

// グリッドコンテナ
type GridContainerProps = {
  $columns?: string;
  $gap?: string;
  $mobileColumns?: string;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: ${(props) => props.$columns || "1fr"};
  gap: ${(props) => props.$gap || `${theme.space.lg}`};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: ${(props) => props.$mobileColumns || "1fr"};
  }
`;
