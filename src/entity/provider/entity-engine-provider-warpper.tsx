'use client';

import type { EntityPermissionActionType } from '@scenemesh/entity-engine';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import { EntityViewInspector, createEntityEngineProvider } from '@scenemesh/entity-engine';

import { views, models } from '../model-config';

type EntityEngineProviderWrapperProps = {
  children: React.ReactNode;
};

export function EntityEngineProviderWrapper(props: EntityEngineProviderWrapperProps) {
  const router = useRouter();
  
    console.log('🚀 EntityEngineProviderWrapper: Creating provider with serverInfo:', {
      baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
      endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT || '/api/ee',
      isDev: process.env.NODE_ENV === 'development'
    });

    const EntityEngineProvider = createEntityEngineProvider({
      models,
      views,
      suiteAdapters: [],
      suiteAdapter: { suiteName: 'build-in', suiteVersion: '1.0.0' },
      router: {
        navigate: (path: string, state?: unknown) => {
          console.log(`🚀 Navigating to ${path} with state:`, state);
          router.push(path, undefined);
        },
      },
      permissionGuard: {
        checkPermission: async (action: EntityPermissionActionType) => {
          console.log(`🚀 Checking permission for action: ${action}`);
          return true;
        },
      },
      renderers: [],
      serverInfo: {
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
        endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT || '/api/ee',
      },
    });

  return (
    <EntityEngineProvider>
        {props.children}
    </EntityEngineProvider>
  );
}
