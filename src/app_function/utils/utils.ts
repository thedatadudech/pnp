/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Project } from "./interfaces";
import tc from "thousands-counter";
import { type Testimonial } from "~/components/work_for_t/testi_card";

export function stringToReadableUrl(str: string, reverse?: boolean): string {
  if (reverse) {
    // Convert readable URL back to original string
    return str.split("-").filter(Boolean).join(" ");
  } else {
    // Convert input string to readable URL
    return str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .split("-")
      .filter(Boolean)
      .join("-");
  }
}

export function isPro(object: any): object is Project {
  return "whatText" in object;
}

export function isTestis(object: any): object is Testimonial {
  return "position" in object;
}

export function toTitleCase(str: string): string {
  return str.replace(
    /\b\w+/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

export function showCountHuman(count: number): number {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return tc(count, { digits: 2, uppercase: false });
}

export function sliceText(text: string, maxLength = 160): string {
  if (text.length > maxLength) {
    let slicedText = text.slice(0, maxLength);
    const lastChar = slicedText.charAt(slicedText.length - 1);
    if (lastChar !== " ") {
      slicedText = slicedText.substring(0, slicedText.lastIndexOf(" "));
      if (/[^\w\s]/.test(lastChar)) {
        slicedText = slicedText.substring(0, slicedText.length - 1);
      }
    }
    return slicedText;
  }
  return text;
}

export function getDataUrl(repoPath: string) {
  return "https://github.com" + repoPath + "/blob/data";
}

export function getUserNRepo(repoPath: string): {
  userName: string;
  repo: string;
} {
  const sp = repoPath.split("/");
  return {
    userName: sp[1] ?? "",
    repo: sp[2] ?? "",
  };
}
