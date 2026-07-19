import type { HeroLogoTestimonial } from "@/lib/heroLogoStrip";
import { withBasePath } from "@/lib/basePath";

function QuoteText({ quote }: { quote: string }) {
  const parts = quote.split(/\*\*(.*?)\*\*/g);

  return (
    <p className="hero__logo-popover-quote">
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index}>{part}</strong>
        ) : (
          part
        ),
      )}
    </p>
  );
}

type LogoTestimonialPopoverProps = {
  id: string;
  testimonial: HeroLogoTestimonial;
  visible: boolean;
};

export function LogoTestimonialPopover({
  id,
  testimonial,
  visible,
}: LogoTestimonialPopoverProps) {
  return (
    <div
      id={id}
      className={`hero__logo-popover${visible ? " is-visible" : ""}`}
      role="tooltip"
      aria-hidden={!visible}
    >
      <span className="hero__logo-popover-mark" aria-hidden="true">
        &ldquo;
      </span>
      <QuoteText quote={testimonial.quote} />
      <div className="hero__logo-popover-divider" aria-hidden="true" />
      <div className="hero__logo-popover-author">
        <span className="hero__logo-popover-avatar" aria-hidden="true">
          {testimonial.avatarSrc ? (
            <img src={withBasePath(testimonial.avatarSrc)} alt="" />
          ) : (
            testimonial.initials
          )}
        </span>
        <div className="hero__logo-popover-meta">
          <span className="hero__logo-popover-role">{testimonial.role}</span>
          <span className="hero__logo-popover-name">{testimonial.author}</span>
        </div>
      </div>
      <span className="hero__logo-popover-caret" aria-hidden="true" />
    </div>
  );
}
