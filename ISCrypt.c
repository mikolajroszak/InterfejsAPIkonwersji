#include <windows.h>

typedef unsigned char byte;

struct ArcFourContext {
	byte state[256];
	byte x, y;
};

int __stdcall ISCryptGetVersion()
{
	return 1;
}

void __stdcall ArcFourInit(struct ArcFourContext *context, const byte *key, unsigned int key_length)
{
	unsigned int i, j = 0, k = 0;

	for (i = 0; i < 256; i++) {
		context->state[i] = i;
	}

	for (i = 0; i < 256; i++)
	{
		byte a = context->state[i];
		j = (j + key[k] + a) & 0xff;
		context->state[i] = context->state[j];
		context->state[j] = a;
		if(++k >= key_length) {
			k = 0;
		}
	}

	context->x = 0;
	context->y = 0;
}

void __stdcall ArcFourCrypt(struct ArcFourContext *context, const byte *in_buffer, byte *out_buffer,
							unsigned int length)
{
	byte x = context->x;
	byte y = context->y;
	byte *state = context->state;
	unsigned int i;
	byte a, b;

	for (i = 0; i < length; i++)
	{
		x = (x + 1) & 0xff;
		a = state[x];
		y = (y + a) & 0xff;
		b = state[y];
		state[x] = b;
		state[y] = a;
		if (out_buffer != NULL) {
			out_buffer[i] = in_buffer[i] ^ state[(a + b) & 0xff];
		}
	}

	context->x = x;
	context->y = y;
}

BOOL WINAPI _DllMainCRTStartup(HINSTANCE hInstance, DWORD dwReason, LPVOID lpReserved)
{
    if (dwReason == DLL_PROCESS_ATTACH)
    {
        DisableThreadLibraryCalls(hInstance);
    }
    return TRUE;
}