"use client";

import { useState, useEffect } from "react";

// This component forces its children to only render on the client side.
// This is a workaround to prevent Hydration Mismatch errors caused by
// browser extensions (like Bitdefender) injecting attributes into the HTML.
export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Render nothing on the server
  }

  return <>{children}</>;
}
