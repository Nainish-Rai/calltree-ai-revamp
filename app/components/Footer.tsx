'use client';

import { useState } from 'react';
import { DotPattern } from './DotPattern';
import { CookiePreferenceDialog } from './CookiePreferenceDialog';

export function Footer() {
    const [isCookieDialogOpen, setIsCookieDialogOpen] = useState(false);

    return (
        <>
            <footer className="w-full border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
                        <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8">
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors hidden"
                            >
                                Product
                            </a>
                            <a
                                href="/company"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Company
                            </a>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors hidden"
                            >
                                Resources
                            </a>
                            <a
                                href="mailto:kun@calltree.ai"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Contact
                            </a>
                            <a
                                href="/privacy"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Privacy
                            </a>
                            <a
                                href="/terms"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Terms
                            </a>
                            <button
                                onClick={() => setIsCookieDialogOpen(true)}
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Cookies
                            </button>
                        </div>
                        <div className="text-sm text-gray-600">© 2025 CallTree AI</div>
                    </div>
                </div>
                <div className="h-[106px] overflow-hidden">
                    <DotPattern />
                </div>
            </footer>

            <CookiePreferenceDialog
                isOpen={isCookieDialogOpen}
                onClose={() => setIsCookieDialogOpen(false)}
            />
        </>
    );
}
