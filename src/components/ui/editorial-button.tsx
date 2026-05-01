"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  HairlineArrow,
} from "@/components/icons/arrows";
import { cn } from "@/lib/utils";

type Variant = "hairline" | "framed" | "filled" | "underline";
type Direction = "right" | "left" | "up-right" | "none";

type CommonProps = {
  variant?: Variant;
  direction?: Direction;
  className?: string;
  children: React.ReactNode;
  /** small uppercase label rendered above the main label (e.g. "Read") */
  kicker?: string;
  size?: "sm" | "md" | "lg";
};

type LinkProps = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonProps = CommonProps & {
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

type Props = LinkProps | ButtonProps;

const SIZE_CLASS = {
  sm: "text-[13px]",
  md: "text-[15px]",
  lg: "text-base",
};

/**
 * Editorial-style action element.
 *
 * Variants:
 *   hairline  — extending hairline rule + arrow + label (default, ホーム CTA向け)
 *   framed    — thin square border, inverts on hover (フォームの主要動線向け)
 *   filled    — solid foreground bg, hairline-frame on hover release (重要操作)
 *   underline — シンプルな下線リンク（本文中向け）
 */
export function EditorialButton(props: Props) {
  const {
    variant = "hairline",
    direction = "right",
    kicker,
    size = "md",
    className,
    children,
  } = props;

  const Arrow =
    direction === "left"
      ? ArrowLeft
      : direction === "up-right"
      ? ArrowUpRight
      : direction === "none"
      ? null
      : ArrowRight;

  const inner = (() => {
    if (variant === "hairline") {
      return (
        <span className={cn("group inline-flex items-baseline gap-3", SIZE_CLASS[size])}>
          {direction === "left" && Arrow && (
            <Arrow className="size-3.5 text-foreground/65 transition-transform duration-300 group-hover:-translate-x-1" />
          )}
          {direction !== "left" && (
            <HairlineArrow length={size === "lg" ? "lg" : "md"} />
          )}
          <span className="font-serif-jp font-medium tracking-tight">
            {kicker && (
              <span className="block font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
                {kicker}
              </span>
            )}
            {children}
          </span>
        </span>
      );
    }

    if (variant === "framed") {
      return (
        <span
          className={cn(
            "group inline-flex items-center gap-3 border border-foreground/45 px-5 py-2.5 transition-colors hover:bg-foreground hover:text-background",
            SIZE_CLASS[size]
          )}
        >
          {kicker && (
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-background/70">
              {kicker} ·
            </span>
          )}
          <span className="font-serif-jp font-medium tracking-tight">{children}</span>
          {Arrow && <Arrow className="size-3.5" />}
        </span>
      );
    }

    if (variant === "filled") {
      return (
        <span
          className={cn(
            "group inline-flex items-center gap-3 bg-foreground text-background px-5 py-2.5 hover:bg-foreground/90 transition-colors",
            SIZE_CLASS[size]
          )}
        >
          {kicker && (
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-background/70">
              {kicker} ·
            </span>
          )}
          <span className="font-serif-jp font-medium tracking-tight">{children}</span>
          {Arrow && <Arrow className="size-3.5" />}
        </span>
      );
    }

    // underline
    return (
      <span
        className={cn(
          "font-serif-jp tracking-tight underline underline-offset-[5px] decoration-1 hover:decoration-2 decoration-foreground/55",
          SIZE_CLASS[size]
        )}
      >
        {children}
        {Arrow && (
          <Arrow className="size-3.5 ml-1.5 inline-block translate-y-[-1px] text-foreground/55" />
        )}
      </span>
    );
  })();

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cn("inline-block", className)}>
        {inner}
      </Link>
    );
  }

  const { onClick, type = "button", disabled } = props as ButtonProps;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn("inline-block disabled:opacity-50 disabled:cursor-not-allowed", className)}
    >
      {inner}
    </button>
  );
}
