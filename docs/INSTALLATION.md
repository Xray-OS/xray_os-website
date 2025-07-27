# Xray_OS Installation Guide

## Pre-Installation

### System Requirements Check
Before installing Xray_OS, ensure your system meets the minimum requirements:
- 64-bit processor
- 2GB RAM (4GB+ recommended)
- 20GB free disk space
- UEFI or Legacy BIOS support

### Download and Verification
1. Download Xray_OS ISO from [SourceForge](https://sourceforge.net/projects/xray-os/)
2. Verify the download integrity (checksums provided on download page)

## Creating Installation Media

### Using Rufus (Windows)
1. Download Rufus from official website
2. Insert USB drive (8GB+ recommended)
3. Select Xray_OS ISO file
4. Choose GPT partition scheme for UEFI
5. Click "Start" to create bootable USB

### Using dd (Linux/macOS)
```bash
# Replace /dev/sdX with your USB device
sudo dd if=xray-os-2024.1.iso of=/dev/sdX bs=4M status=progress
sync
```

## Installation Process

### Boot from Installation Media
1. Insert bootable USB into target computer
2. Boot from USB (may require changing boot order in BIOS/UEFI)
3. Select "Install Xray_OS" from boot menu

### Installation Steps
1. **Language Selection** - Choose your preferred language
2. **Keyboard Layout** - Select keyboard layout
3. **Network Configuration** - Configure internet connection (optional but recommended)
4. **Disk Partitioning** - Choose installation method:
   - **Automatic**: Let installer handle partitioning
   - **Manual**: Custom partition setup for advanced users
5. **User Account** - Create your user account and set password
6. **System Configuration** - Configure timezone, hostname
7. **Package Selection** - Choose additional software packages
8. **Installation** - Wait for system installation to complete
9. **Reboot** - Remove installation media and reboot

## Post-Installation

### First Boot
1. Boot into your new Xray_OS system
2. Log in with the account created during installation
3. System will perform initial setup and updates

### Essential First Steps
```bash
# Update system packages
sudo pacman -Syu

# Install additional drivers if needed
sudo pacman -S linux-firmware

# Enable firewall
sudo systemctl enable ufw
sudo ufw enable
```

## Troubleshooting

### Boot Issues
- **Black screen**: Try adding `nomodeset` to kernel parameters
- **UEFI problems**: Disable Secure Boot in BIOS settings
- **Graphics issues**: Install proprietary drivers after installation

### Installation Fails
- Check system requirements
- Verify ISO integrity
- Try different USB port or creation method
- Disable fast boot in Windows (dual boot scenarios)

## Advanced Installation

### Manual Partitioning
For experienced users who want custom partition layouts:

1. **EFI System Partition**: 512MB, FAT32, mounted at `/boot/efi`
2. **Root Partition**: 20GB+, ext4, mounted at `/`
3. **Home Partition**: Remaining space, ext4, mounted at `/home`
4. **Swap**: Optional, size depends on RAM amount

### Dual Boot Setup
Xray_OS can be installed alongside other operating systems:
1. Shrink existing OS partition to make space
2. Install Xray_OS in free space
3. GRUB bootloader will detect other OS automatically

## Support

If you encounter issues during installation:
- Check the [Troubleshooting Guide](TROUBLESHOOTING.md)
- Visit the SourceForge project page for community support
- Report bugs on the project issue tracker