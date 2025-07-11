'use client';

import { useState, useEffect, useRef } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Cookie, Shield, BarChart3, Target, Settings } from 'lucide-react';

interface CookiePreferenceDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

// Custom Switch Component following red theme
function Switch({
    checked,
    onCheckedChange,
}: {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
}) {
    return (
        <button
            type="button"
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                checked ? 'bg-[#d42638]' : 'bg-input'
            }`}
            onClick={() => onCheckedChange(!checked)}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                    checked ? 'translate-x-6' : 'translate-x-1'
                }`}
            />
        </button>
    );
}

export function CookiePreferenceDialog({ isOpen, onClose }: CookiePreferenceDialogProps) {
    const [preferences, setPreferences] = useState({
        marketing: true,
        functional: true,
        analytics: true,
        essential: true, // Always true, can't be disabled
    });

    // Load saved preferences on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('cookiePreferences');
            if (saved) {
                setPreferences((prev) => ({ ...prev, ...JSON.parse(saved) }));
            }
        }
    }, []);

    const savePreferences = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        }
        onClose();
    };

    const acceptAll = () => {
        const allAccepted = {
            marketing: true,
            functional: true,
            analytics: true,
            essential: true,
        };
        setPreferences(allAccepted);
        if (typeof window !== 'undefined') {
            localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
        }
        onClose();
    };

    const rejectAll = () => {
        const essentialOnly = {
            marketing: false,
            functional: false,
            analytics: false,
            essential: true,
        };
        setPreferences(essentialOnly);
        if (typeof window !== 'undefined') {
            localStorage.setItem('cookiePreferences', JSON.stringify(essentialOnly));
        }
        onClose();
    };

    const cookieCategories = [
        {
            id: 'marketing',
            title: 'Marketing and Advertising',
            description:
                'These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement.',
            icon: Target,
            enabled: preferences.marketing,
            toggleable: true,
        },
        {
            id: 'functional',
            title: 'Functional',
            description:
                'These cookies remember choices you make and provide enhanced, more personal features. They may be set by us or by third-party providers.',
            icon: Settings,
            enabled: preferences.functional,
            toggleable: true,
        },
        {
            id: 'analytics',
            title: 'Analytics',
            description:
                'These cookies collect information about how you use our website, such as which pages you visit most often. This data helps us improve our website performance.',
            icon: BarChart3,
            enabled: preferences.analytics,
            toggleable: true,
        },
        {
            id: 'essential',
            title: 'Strictly Necessary',
            description:
                'These cookies are necessary for our website to function properly. They enable core functionality such as security, network management, and accessibility.',
            icon: Shield,
            enabled: preferences.essential,
            toggleable: false,
        },
    ];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl h-[90vh] flex flex-col p-0">
                {/* Fixed Header */}
                <DialogHeader className="flex-shrink-0 px-6 pt-6 pb-4 border-b">
                    <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-[#d42638] rounded-full flex items-center justify-center">
                            <Cookie className="h-5 w-5 text-white" />
                        </div>
                        <DialogTitle className="text-xl text-[#252525]">
                            Privacy Preference Center
                        </DialogTitle>
                    </div>
                    <DialogDescription className="text-left text-sm  text-[#575757]">
                        When you visit any website, it may store or retrieve information on your
                        browser, mostly in the form of cookies. This information might be about you,
                        your preferences or your device and is mostly used to make the site work as
                        you expect it to. You can choose not to allow some types of cookies.
                    </DialogDescription>
                </DialogHeader>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                    <div className="space-y-4">
                        {cookieCategories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <div
                                    key={category.id}
                                    className="border rounded-lg p-4 space-y-3 hover:border-[#d42638]/20 transition-colors"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start space-x-3 flex-1">
                                            <div className="w-5 h-5 mt-0.5 flex items-center justify-center">
                                                <Icon className="h-4 w-4 text-[#d42638]" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-medium text-sm text-[#252525]">
                                                    {category.title}
                                                </h3>
                                                <p className="text-xs text-[#575757] mt-1 leading-relaxed">
                                                    {category.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            {category.toggleable ? (
                                                <Switch
                                                    checked={category.enabled}
                                                    onCheckedChange={(checked) =>
                                                        setPreferences((prev) => ({
                                                            ...prev,
                                                            [category.id]: checked,
                                                        }))
                                                    }
                                                />
                                            ) : (
                                                <div className="px-2 py-1 bg-[#d42638]/10 text-[#d42638] text-xs rounded-md font-medium">
                                                    Always Active
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Fixed Footer */}
                <div className="flex-shrink-0 px-6 pb-6 pt-4 border-t bg-background">
                    <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-2">
                        <Button
                            variant="outline"
                            onClick={rejectAll}
                            className="flex-1 border-[#d42638] text-[#d42638] hover:bg-[#d42638]/5"
                        >
                            Reject All
                        </Button>
                        <Button
                            onClick={savePreferences}
                            className="flex-1 bg-[#d42638] hover:bg-[#c70a1d] text-white"
                        >
                            Confirm Choices
                        </Button>
                        <Button
                            onClick={acceptAll}
                            className="flex-1 bg-[#d42638] hover:bg-[#c70a1d] text-white"
                        >
                            Accept All
                        </Button>
                    </DialogFooter>

                    <div className="text-center pt-2">
                        <p className="text-xs text-[#575757]">
                            Powered by{' '}
                            <span className="font-medium text-[#d42638]">CallTree AI</span>
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
