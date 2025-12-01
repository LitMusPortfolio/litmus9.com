import styled from "styled-components";
import { BackgroundSection } from "@/components/BackgroundSection";
import { Section } from "@/components/Layout";
import LitCharacterSection from "../sections/LitCharacterSection";
import LitDownloadSection from "../sections/LitDownloadSection";
import LitMainSection from "../sections/LitMainSection";
import LitRulesSection from "../sections/LitRulesSection";

const CharacterSection = styled(Section)`
  overflow: hidden;
  padding: 0;
`;

export default function LitCharacter() {
  return (
    <CharacterSection id="voicebank">
      {/* メインセクション - 離途紹介 */}
      <LitMainSection />

      {/* CharacterSectionとDownloadSectionを統合 */}
      <BackgroundSection backgroundImage="/LitBG.webp">
        {/* キャラクター詳細セクション */}
        <LitCharacterSection sizePreset="default" />

        {/* ダウンロードセクション */}
        <LitDownloadSection />

        {/* 利用規約セクション */}
        <LitRulesSection />
      </BackgroundSection>
    </CharacterSection>
  );
}
