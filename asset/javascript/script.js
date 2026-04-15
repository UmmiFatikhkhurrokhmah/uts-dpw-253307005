const TOAST_DURATION = 3000;
const TOAST_FADE = 400;

let toastTimer = null;


function showToast(message, type) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    // Batalkan timer sebelumnya jika toast masih aktif
    if (toastTimer) {
        clearTimeout(toastTimer);
        toast.className = '';
        toast.offsetHeight; // reflow paksa agar animasi ulang
    }

    // Pasang ikon sesuai tipe
    const icons = { success: '✅', error: '❌', warning: '⚠️' };
    const icon = icons[type] || '';

    toast.innerHTML = `<span class="toast-icon">${icon}</span> ${message}`;
    toast.className = `show ${type}`;

    // Mulai timer fade-out
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
        toastTimer = setTimeout(() => { toast.className = ''; }, TOAST_FADE);
    }, TOAST_DURATION);
}


function getField(id) {
    const el = document.getElementById(id);
    return { el, val: el ? el.value.trim() : '' };
}


function setError(el) {
    if (!el) return;
    el.classList.add('input-error');
    el.addEventListener('input', () => clearError(el), { once: true });
    el.addEventListener('change', () => clearError(el), { once: true });
}

function clearError(el) {
    if (el) el.classList.remove('input-error');
}


function validateNIK(value) {
    return /^\d{16}$/.test(value);
}


function kirimPendaftaran() {
    const nama = getField('nama');
    const nik = getField('nik');
    const jalur = getField('jalur');

    // Bersihkan status error sebelumnya
    [nama.el, nik.el, jalur.el].forEach(clearError);


    if (!nama.val) {
        setError(nama.el);
        showToast('Nama Lengkap wajib diisi!', 'error');
        nama.el && nama.el.focus();
        return;
    }

    if (!nik.val) {
        setError(nik.el);
        showToast('NIK wajib diisi!', 'error');
        nik.el && nik.el.focus();
        return;
    }

    if (!jalur.val) {
        setError(jalur.el);
        showToast('Jalur Pendaftaran wajib dipilih!', 'error');
        jalur.el && jalur.el.focus();
        return;
    }

    if (!validateNIK(nik.val)) {
        setError(nik.el);
        const panjang = nik.val.replace(/\D/g, '').length;
        const pesan = panjang !== 16
            ? `NIK harus tepat 16 digit! (sekarang ${panjang} digit)`
            : 'NIK hanya boleh berisi angka (0–9)!';
        showToast(pesan, 'error');
        nik.el && nik.el.focus();
        return;
    }


    const jalurLabel = jalur.el
        ? jalur.el.options[jalur.el.selectedIndex].text
        : jalur.val;

    showToast(`Pendaftaran ${nama.val} (${jalurLabel}) berhasil dikirim!`, 'success');

    // Reset semua field
    ['nama', 'nik', 'jalur'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const nikInput = document.getElementById('nik');
    if (!nikInput) return;


    const counter = document.createElement('span');
    counter.id = 'nik-counter';
    counter.className = 'nik-counter';
    counter.textContent = '0 / 16 digit';
    nikInput.insertAdjacentElement('afterend', counter);

    nikInput.addEventListener('input', function () {
        const digits = this.value.replace(/\D/g, '').length;
        counter.textContent = `${digits} / 16 digit`;

        if (digits === 0) {
            counter.className = 'nik-counter';
        } else if (digits < 16) {
            counter.className = 'nik-counter warning';
        } else if (digits === 16) {
            counter.className = 'nik-counter ok';
        } else {
            counter.className = 'nik-counter error';
        }
    });
});