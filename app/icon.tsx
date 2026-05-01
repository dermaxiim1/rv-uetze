import { ImageResponse } from "next/og";

import { SITE } from "@/lib/site";
import { THEME } from "@/lib/theme";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 30,
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
