import { ImageResponse } from "next/og";

import { SITE } from "@/lib/site";
import { THEME } from "@/lib/theme";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          background: THEME.forest,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: THEME.cream,
          fontFamily: "serif",
          fontStyle: "italic",
          fontWeight: 600,
          letterSpacing: "-0.04em",
        }}
      >
        {SITE.shortName}
      </div>
    ),
    size,
  );
}
